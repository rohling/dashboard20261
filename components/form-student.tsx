"use client"
export default function FormStudent() {

    async function saveStudent() {
    console.log("...Salvando estudante")
    const student={
        name: (document.getElementById("name") as HTMLInputElement).value,
        email: (document.getElementById("email") as HTMLInputElement).value,
    }
    console.log(student);
    const response = await fetch("https://crudcrud.com/api/792253382952414a85295b574041e86c/students",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(student)
    })

    }
    return (
        <form>
            <label htmlFor="name">Nome:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <button onClick={saveStudent} type="submit">Cadastrar</button>
        </form>
    )
}