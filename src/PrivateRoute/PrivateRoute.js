import Button from "@restart/ui/esm/Button";
import { Spinner } from "react-bootstrap";
import { Redirect, Route } from "react-router";
import useAuth from "../Hook/useAuth";


function PrivateRoute({ children, ...rest }) {

    const { allContext } = useAuth()
    const { user, isLoading } = allContext;
    if (isLoading) {
        return <>
            <Button className='my-5'  variant="danger" disabled>
                <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                />
                <span className="visually-hidden">Loading...</span>
            </Button>{' '}
            <Button variant="primary" disabled>
                <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                />
                Loading...
            </Button>
        </>
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user?.displayName ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}

export default PrivateRoute;