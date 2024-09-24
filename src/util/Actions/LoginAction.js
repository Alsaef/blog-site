'use server'

export const LoginAction=async(data)=>{
    const res = await fetch('http://localhost:5000/api/v1/login',{
        method:"POST",
        headers: {
            "Content-Type": "application/json"
          },
          body:JSON.stringify(data),
          cache:'no-store'
    })

    const response= res.json()

    return response
}