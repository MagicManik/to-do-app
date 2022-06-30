// import React from 'react';

// const AddTask = () => {

//      const [user] = useAuthState(auth);

//     // handle form submit
//     const handleTaskForm = event => {

//         event.preventDefault();
//         const email = user.email;
//         const name = event.target.name.value;
//         const description = event.target.description.value;

//         const task = { name, description, email };


//         fetch(' https://infinite-ridge-47501.herokuapp.com/tasks', {
//             method: 'POST',
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body: JSON.stringify(task)
//         })
//             .then(res => res.json())
//             .then(data => {

//                 // task added success হলে
//                 if (data.insertedId) {
//                     toast.success('Task is added successfully')
//                 }

//                 // task added success না হলে
//                 else {
//                     toast.error('Task Addition Failed')
//                 }
//             })

//         event.target.reset();
//     }

//     return (
//         <section className='task-form-container'>
//         <div className='task-container'>
//             <form onSubmit={handleTaskForm} className='task-form mx-auto'>
//                 <h2 className='task-title'>Add Your Task</h2>

//                 <input className='task-input-field' type="text" name="name" id="" placeholder='Task name' required />

//                 <textarea className='task-input-field' name="description" id="" cols="30" rows="3" placeholder='Task description' required></textarea>

//                 <input className='add-task-button' type="submit" value="Add Task" />

//             </form>
//         </div>
//     </section>
//     );
// };

// export default AddTask;