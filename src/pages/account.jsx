const Account = () => {
    return (
        <>
            <form>
                <h2>Please Login Here!</h2>
                <input required placeholder="Username"/>
                <input required placeholder="Password"/>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default Account;