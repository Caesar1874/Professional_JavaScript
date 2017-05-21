
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
        this.handleEvent = this.handleEvent.bind(this)
    }
    enable() {
        const handleEvent = this.handleEvent
        document.addEventListener('mousedown', handleEvent)
        document.addEventListener('mousemove', handleEvent)
        document.addEventListener('mouseup', handleEvent)
    }
    disable() {
        const handleEvent = this.handleEvent
        document.removeEventListener('mousedown', handleEvent)
        document.removeEventListener('mousemove', handleEvent)
        document.removeEventListener('mouseup', handleEvent)
    }


    handleEvent(event) {
        const target = event.target;
        const type = event.type
        console.log('this', this)
        if(type === 'mousedown') {
            console.log('mousedown')
            if(target.classList.contains('draggable')) {
                console.log('this.target', this.target)
                this.target = target
            }
        } else if(type === 'mousemove') {
            if(this.target !== null) {
                console.log('mosemove')
                followPointer(this.target, event)
            }
        } else if(type === 'mouseup') {
            console.log('mouseup')
            this.target = null
        }
    }
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





