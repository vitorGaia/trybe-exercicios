const headerContainer = document.getElementById('header-container');
headerContainer.style.backgroundColor = '#008B8B';

const emergencyTasks = document.getElementsByClassName('emergency-tasks')[0];
emergencyTasks.style.backgroundColor = '#DB7093';
document.getElementsByTagName('h3')[0].style.backgroundColor = '#4B0082';
document.getElementsByTagName('h3')[1].style.backgroundColor = '#4B0082';

const noEmergencyTasks = document.getElementsByClassName('no-emergency-tasks')[0];
noEmergencyTasks.style.backgroundColor = '#FFD700';
document.getElementsByTagName('h3')[2].style.backgroundColor = 'black';
document.getElementsByTagName('h3')[3].style.backgroundColor = 'black';

document.getElementById('footer-container').style.backgroundColor = '#2E8B57';