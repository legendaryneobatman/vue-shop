const onClick = ($event, el, callback) => {
    if (!el.contains($event.target)) {
        callback()
    }
}

export default {
    mounted (el, binding) {
        document.addEventListener('click', ($event) => onClick($event, el, binding.value))
    },
    beforeUnmount (el, binding) {
        document.removeEventListener('click', ($event) => onClick($event, el, binding.value))
    }
}
