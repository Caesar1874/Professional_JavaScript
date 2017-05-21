
const followPointer = (target, event)=> {
    console.log('fo',target)
    const x = event.clientX
    const y = event.clientY
    console.log(x, y)
    target.style.left = x + 'px'
    target.style.top = y + 'px'
}

class DragDrop {
    constructor() {
        this.target = null
    }
    enable() {
        document.addEventListener('mousedown', this.handleMousedown)
        document.addEventListener('mousemove', this.handleMousemove)
        document.addEventListener('mouseup', this.handleMouseup)
    }
    disable() {
        document.removeEventListener('mousedown', this.handleMousedown)
        document.removeEventListener('mousemove', this.handleMousemove)
        document.removeEventListener('mouseup', this.handleMouseup)
    }

    handleMousedown(event) {
        console.log('mousedown')
        if(event.target.classList.contains('draggable')) {
            this.target = event.target
        }
    }

    handleMousemove(event) {
        if(this.target !== null) {
            console.log('mosemove')
            followPointer(this.target, event)
        }
    }

    handleMouseup(event) {
        console.log('mouseup')
        this.target = null
    }

    /*handleEvent(event) {
        const target = event.target;
        const type = event.type

        if(type === 'mousedown') {
            console.log('mousedown')
            if(target.classList.contains('draggable')) {
                this.target = target
            }
        } else if(type === 'mousemove') {
            console.log(this)
            if(this.target !== null) {
                console.log('mosemove')
                followPointer(this.target, event)
            }
        } else if(type === 'mouseup') {
            console.log('mouseup')
            this.target = null
        }
    }*/
}

const dragDrop = (() => {
    let instance = null
    return () => {
        if(instance === null) {
            instance = new DragDrop()
        }
        return instance
    }
})()

const inst = dragDrop()
inst.enable()





