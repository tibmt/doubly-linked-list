const Node = require('./node');

class LinkedList {
    constructor() {
        this.links = [];
        this.length = 0;
        this._head = null;
        this._tail = null;
    }

    append(data) {
        if(this.links.length === 0) {
            let node = new Node(data);
            this._tail = node;
            this._head = node;
            this.links.push(node);
            this.length = this.links.length;
        } else {
            let lengthCopy = this.links.length;
            let node = new Node(data, lengthCopy - 1);

            this._tail = node;
            this.links[lengthCopy-1].next = lengthCopy;
            this.links.push(node);
            this.length = this.links.length;
        }
        return this;
    }

    head() {
        return this._head.data;
    }

    tail() {
        return this._tail.data;
    }

    at(index) {
        return this.links[index].data;
    }

    insertAt(index, data) {

        if (index >= this.length && index !== 0) {
            return false;
        }

        if (this.links[index]) {
            this.append(this.links[index].data);
            this.links[index].data = data;
        }

        if (index === 0 && this.length === 0) {
            this.append(data);
        }

        return this;
    }

    isEmpty() {
        if(this.links.length === 0 ){
            return true;
        }else{
            return false;
        }
    }

    clear() {
        this._head = new Node(null);
        this._tail = new Node(null);
        this.length = 0;
        return this;
    }

    deleteAt(index) {
        for (let i = index; i< this.length-1; i++) {
            this.links[i].prev = this.links[i+1].prev;
            this.links[i].next = this.links[i+1].next;
            this.links[i].data = this.links[i+1].data;
        }
        this.links.pop();
        this.length = this.links.length;
        return this;
    }

    reverse() {
        let reverseLinks = this.links.reverse();
        for (let i = 0; i <= reverseLinks.length-1; i++) {

            if (i === 0) {
                reverseLinks[i].prev = null;
            } else {
                reverseLinks[i].prev = i-1;
            }
            if (i === reverseLinks.length-1) {
                reverseLinks[i].next = null
            } else {
                reverseLinks[i].next = i+1;
            }
        }
        this._tail = reverseLinks[reverseLinks.length-1];
        this._head = reverseLinks[0];
        this.links = reverseLinks;
        return this;
    }

    indexOf(data) {
        var DataFound = 0;
        for (let index = 0; index < this.links.length; index++) {
            if (this.links[index].data === data) {
                DataFound++;
                return index;
            }
        }
        if (DataFound == 0){
            return -1;
        }
    }
}

module.exports = LinkedList;
