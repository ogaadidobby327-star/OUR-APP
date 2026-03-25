document.getElementById('signup-form').addEventListener('submit',async(e)=>{
    e.preventDefault();
    const name = document.getElementById('name').Value;
    const phone = document.getElementById('phone').value;
    await fetch('/signup',{
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({name,phone})
    })
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('dahboard').style.display = 'block';
});
document.getElementById('withdrawl-btn').adaEventListener('click', async () => {
    const amount = document.getElementById('withdrawal-amount').value;
    const userId = 'get_user_id_here'; // implement getting user ID
    await fetch('/withdraw',{
        method: 'POST',
        headers: {'Content-Type':'application/json' },
        body: JSON.stringify({userId,amount})
    });

});