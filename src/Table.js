export default function Table({ query }) {
    const [name, email] = query;
    return (
        <Table>
            <tr>
                <th>Name</th>
                <th>Email</th>
            </tr>
            <tr>
                <td>{name}</td>
                <td>{email}</td>
            </tr>
        </Table>
    )

}