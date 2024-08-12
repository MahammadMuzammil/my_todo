const tasks = [
    { task: 'Complete project report', isChecked: false, date: '2024-08-10', id: 1 },
    { task: 'Buy groceries', isChecked: true, date: '2024-08-11', id: 2 },
    { task: 'Schedule team meeting', isChecked: false, date: '2024-08-10', id: 3 },
    { task: 'Read the latest book', isChecked: true, date: '2024-08-12', id: 4 },
    { task: 'Pay utility bills', isChecked: false, date: '2024-08-11', id: 5 },
    { task: 'Clean the house', isChecked: true, date: '2024-08-13', id: 6 },
    { task: 'Prepare presentation slides', isChecked: false, date: '2024-08-14', id: 7 },
    { task: 'Call the client', isChecked: true, date: '2024-08-10', id: 8 },
    { task: 'Update website', isChecked: false, date: '2024-08-15', id: 9 }
];

const segregatedTasks = tasks.reduce((acc,task)=>{
    if(!acc[task.date]){
        acc[task.date]=[]
    }
    acc[task.date].push(task)
    return acc
    
},[])
console.log(segregatedTasks);



