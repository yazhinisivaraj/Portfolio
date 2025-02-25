
const projectElements = document.querySelectorAll('.project');


function openProjectDescription(event) {
    const project = event.currentTarget;
    const description = project.querySelector('p');
    description.style.display = 'block';
}


projectElements.forEach((project) => {
    project.addEventListener('click', openProjectDescription);
});
