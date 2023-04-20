import React, { useState, useEffect } from "react";
import './table.css'

export default function Student_details() {

    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [age, setAge] = useState("")
    const [qualification, setQualification] = useState("");

    const [student, setStudent] = useState([])

    function HandleSubmit(ele) {
        ele.preventDefault();

        let newStudent = {
            name: name,
            phone: phone,
            age: age,
            qualification: qualification
        }

        setStudent([...student, newStudent])

        setName("")
        setPhone("")
        setAge("")
        setQualification("")
    }

    return (
        <div style={{ textAlign: "center", display: "flex", justifyContent: "center" }}>
            <form style={{ backgroundColor: "yellow", width: "500px", height: "360px", borderRadius: "100px"}}>

                <h1 style={{ color: "red" }}>Student Details</h1>
                <label>Name : </label>
                <input
                    type="text"
                    placeholder="Enter Name  "
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <br /><br />

                <label>Phone No : </label>
                <input
                    type="text"
                    placeholder="Enter Phone No "
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                />
                <br /><br />

                <label>Age : </label>
                <input
                    type="number"
                    placeholder="Enter Age "
                    value={age}
                    onChange={(element) => setAge(element.target.value)}
                    required
                />
                <br /><br />

                <label>qualification : </label>
                <input
                    type="text"
                    placeholder="Enter Qualification"
                    value={qualification}
                    onChange={(ele) => setQualification(ele.target.value)}
                    required
                />
                <br /><br /><br />

                <button type="submit" style={{ backgroundColor: "green", fontSize: "20px", borderRadius: "7px" }} onClick={HandleSubmit}>submit</button>
            </form>

            {student.length > 0 && (

                <table  >
                    <thead >
                        <tr>
                            <th >Name</th>
                            <th >Phone</th>
                            <th >Age</th>
                            <th >Qualification</th>
                        </tr>
                    </thead>

                    <tbody >
                        {
                            student.map((std, index) => (
 
                                <tr  key = "index"  style={{margin : "2px"}}>
                                    <td >{std.name}</td>
                                    <td >{std.phone}</td>
                                    <td>{std.age}</td>
                                    <td >{std.qualification}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            )}

        </div>
    )
}