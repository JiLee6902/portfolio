import { useState } from "react";
import './Video10.css'

export interface ITest {
    name?: string,
    age?: number | string
}
export interface IUser {
    name: string,
    age: number,
    city: string
}

export

    const Video10 = (props: ITest) => {

        const [name, setName] = useState<string>("");
        const [age, setAge] = useState<number | string>("");
        const [city, setCity] = useState<string[]>(["Hà Nội", "Đà Nẵng", "Hồ Chí Minh"]);
        const [selectedCity, setSelectedCity] = useState<string>("Hà Nội");

        const [users, setUsers] = useState<IUser[]>([

        ])


        const [test, setTest] = useState<ITest>({
            name: "",
            age: ""
        })

        const [isShowBtn, setIsShowBtn] = useState<boolean>(false);

        const handleSubmit = (event: React.FormEvent<HTMLInputElement>) => {
            const user = {
                name: name,
                age: age,
                city: selectedCity
            }
        }

        const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        }

        return (
            <>
                <div>Example video 10:  hello world </div>
                <div className="form-user">
                    <div>
                        <label >Name:</label><br />
                        <input type="text" value={name}
                            onChange={handleChange}
                        /><br />
                    </div>
                    <div>
                        <label >Age:</label><br />
                        <input type="text" value={age} /><br />
                    </div>
                    <div>
                        <label >City:</label><br />
                        <select>
                            {city.map(item => {
                                return (<option key={item}>{item}</option>)
                            })}

                        </select>
                    </div>

                    <input
                        type="submit"
                        value="Submit"
                        onClick={handleSubmit}
                    />
                </div>
                <hr />
                <div>List Users:</div>
                <div className="table-user">
                    <table style={{ width: "100%" }}>
                        <thead>
                            <tr>
                                < th>Name</th>
                                <th>Age</th>
                                <th>City</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => {
                                return (
                                    <tr>
                                        <td>{user.name}</td>
                                        <td>{user.age}</td>
                                        <td>{user.city}</td>
                                    </tr>
                                )
                            })}

                        </tbody>
                    </table>
                </div>
            </>
        )
    }

export default Video10;