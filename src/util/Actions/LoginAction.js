'use server'

export const LoginAction=async(data)=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/login`,{
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