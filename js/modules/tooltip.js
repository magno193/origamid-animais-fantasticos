export default function initTooltip() {
  function createTooltipBox(element) {
    const tooltipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    return tooltipBox;
  }
  function onMouseOver(e) {
    const tooltipBox = createTooltipBox(this);
    tooltipBox.style.top = e.pageY + 'px';
    tooltipBox.style.left = e.pageX + 'px';

    onMouseMove.tooltipBox = tooltipBox;
    this.addEventListener('mousemove', onMouseMove);

    onMouseLeave.tooltipBox = tooltipBox;
    onMouseLeave.element = this;
    this.addEventListener('mouseleave', onMouseLeave);
  }

  const onMouseLeave = {
    tooltipBox: '',
    element: '',
    handleEvent() {
      this.tooltipBox.remove();
      this.removeEventListener('mouseleave', onMouseLeave);
      this.removeEventListener('mousemove', onMouseMove);
    },
  }

  const onMouseMove = {
    tooltipBox: '',
    handleEvent(e) {
      this.tooltipBox.style.top = e.pageY + 20 + 'px';
      this.tooltipBox.style.left = e.pageX + 20 + 'px';
    }
  };


  const tooltips = document.querySelectorAll('[data-tooltip]');
  tooltips.forEach(item => {
    item.addEventListener('mouseover', onMouseOver);
  });
};
