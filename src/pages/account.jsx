const Account = () => {
    return (
        <>
            <h2>Please Login Here!</h2>
            <form className="form">
                <div><input required placeholder="Username"/></div>
                <div><input required placeholder="Password"/></div>
                <div><button type="submit">Submit</button></div>
            </form>
        </>
    )
};

export default Account;