function userProfilePage (props) {
    return <h1>{props.userName}</h1>
}

export default userProfilePage;

export async function getServerSideProps(context) {
    const { params, req, res } = context;

    // console.log('Server Side Code');

    return {
        props: {
            userName: 'Karthik'
        }
    };
}