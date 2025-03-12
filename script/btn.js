document.getElementById('btn1').addEventListener('click', function () {
    this.disabled = true;
    alert('Board Updated Successfully');
    const taskNumber = getElementById('task-number')
    const addTask = getInnerTextById('task-add')
    let sum = addTask + 1
    setInnerTextByIDandValue('task-add', sum)
    let reduce = taskNumber - 1
    setInnerTextByIDandValue('task-number', reduce)
    let time = new Date();
      let times = time.toLocaleString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            hour12: true
        }
        ) 
    const setActivity = document.getElementById('activity')
    const div = document.createElement('div')
    div.classList.add('bg-gray-200', 'mt-6', 'mx-5', 'rounded-xl')
    div.innerHTML = `
    <p class="p-4 font-semibold text-xl">You have completed the task Fix Mobile Button Issue at ${times}</p>
    `
    setActivity.appendChild(div)
})