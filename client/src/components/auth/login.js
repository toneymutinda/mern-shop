import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loginUser } from '../../redux/actions/authActions';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            errors: {}
        }
    }

    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push('/dashboard');
        }
    }

    componentDidUpdate() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push('/dashboard'); 
        }

        if (this.props.errors !== this.state.errors) {
            this.setState({
              errors: this.props.errors
            });
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const userData = {
            email: this.state.email,
            password: this.state.password
        }

        this.props.loginUser(userData, this.props.history);
    }

    render() {
        const { email, password, errors } = this.state;

        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-5 col-xl-4 my-5">
                        <h1 className="display-4 text-center mb-3">
                            Sign in
                        </h1>
                        <p className="text-muted text-center mb-5">
                            Free access to your business.
                        </p>

                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label>Email Address</label>
                                <input 
                                    type="email" 
                                    placeholder="name@address.com" 
                                    className={errors.emailnotfound || errors.email ? "form-control is-invalid" : "form-control"} 
                                    name="email"
                                    value={email}
                                    onChange={this.handleChange}
                                />
                                <div className="invalid-feedback">
                                    {errors.emailnotfound}
                                    {errors.email}
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="row">
                                    <div className="col">
                                        <label>Password</label>
                                    </div>
                                    <div className="col-auto">
                                        <Link to="/reset" className="form-text small text-muted">
                                            Forgot password?
                                        </Link>
                                    </div>
                                </div>
                                <div className="input-group input-group-merge">
                                    <input 
                                        type="password" 
                                        placeholder="Enter your password" 
                                        className={errors.password || errors.passwordincorrect ? "form-control form-control-appended is-invalid" : "form-control form-control-appended"}
                                        name="password"
                                        value={password}
                                        onChange={this.handleChange}
                                    />
                                    <div className="input-group-append">
                                        <span className="input-group-text">
                                            <i className="fe fe-eye"></i>
                                        </span>
                                    </div>
                                    <div className="invalid-feedback">
                                        {errors.password}
                                        {errors.passwordincorrect}
                                    </div>
                                </div>
                            </div>
                            <button disabled={this.props.auth.loading} className="btn btn-lg btn-block btn-primary mb-3" type="submit">
                                Sign in
                            </button>
                            <div className="text-center">
                                <small className="text-muted text-center">
                                    Don't have an account yet? <Link to="/register">Sign up</Link>.
                                </small>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        errors: state.errors
    }
}

export default connect(
    mapStateToProps,
    { loginUser }
) (withRouter(Login));