
const followPointer = (target, event)=> {
    // console.log('fo',target)
    const x = event.clientX
    const y = event.clientY
    // console.log(x, y)
    target.style.left = x + 'px'
    target.style.top = y + 'px'
}

var undo = []
const draggable = document.querySelector('.draggable')
class DragDrop {
    constructor() {
        this.target = null
        this.handleEvent = this.handleEvent.bind(this)
    }
    enable() {
        const handleEvent = this.handleEvent
        draggable.addEventListener('mousedown', handleEvent)
        draggable.addEventListener('mousemove', handleEvent)
        draggable.addEventListener('mouseup', handleEvent)
    }
    disable() {
        const handleEvent = this.handleEvent
        draggable.removeEventListener('mousedown', handleEvent)
        draggable.removeEventListener('mousemove', handleEvent)
        draggable.removeEventListener('mouseup', handleEvent)
    }


    handleEvent(event) {
        const target = event.target;
        const type = event.type
        // console.log('this', this)
        if(type === 'mousedown') {
            // console.log('mousedown')
            if(target.classList.contains('draggable')) {
                // console.log('this.target', this.target)
                this.target = target
            }
        } else if(type === 'mousemove') {
            if(this.target !== null) {
                // console.log('mosemove')
                // 当前坐标
                const x = event.clientX
                const y = event.clientY
                undo.push({x, y})
                followPointer(this.target, event)
            }
        } else if(type === 'mouseup') {
            // console.log('mouseup')
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

const btn = document.querySelector("#undo")

btn.addEventListener('click', function(event) {
    console.log('click')
    var {x, y} = undo.pop()
    console.log(x, y)
    draggable.style.left = x + 'px'
    draggable.style.top = y + 'px'
})





