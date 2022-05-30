function createIncrement() 
{
    let count=0;
    function increment() {
        count++;
    }
    let message=`Count is ${count}`;
    function log() 
    {
        //! message=`Count is ${count}`;
        console.log(message);
    }
    
    return[increment,log];
}

const [increment,log] = createIncrement();
increment();    //count = 1 ; message = 'Count is 0'
increment();    //count = 2 ; message = 'Count is 0'
increment();    //count = 3 ; message = 'Count is 0'
log();// What is logged?

//! Here: "Count is 0" will be logged because:
//! At the time of declaration of variable 'message', the value of count is 0,
//! which is not getting updated whenever the variable 'count' gets increment using increment function
//! In case we want to have the variable message contain the current value 
//! of count, we would have to update the message as well.