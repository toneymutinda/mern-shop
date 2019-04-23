import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { registerUser } from '../../redux/actions/authActions';

class Register extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
            errors: {}
        }
    }

    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push('/dashboard');
        }
    }

    componentDidUpdate() {
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

        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password_confirmation: this.state.password_confirmation
        };

        this.props.registerUser(newUser, this.props.history);
    }

    render() {
        const { name, email, password, password_confirmation, errors } = this.state;

        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-5 col-xl-4 my-5">
                        <h1 className="display-4 text-center mb-3">
                            Sign up
                        </h1>
                        <p className="text-muted text-center mb-5">
                            Get started with React shop.
                        </p>

                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label>Name</label>
                                <input 
                                    type="text" 
                                    className={errors.name ? "form-control is-invalid" : "form-control"} 
                                    name="name"
                                    value={name}
                                    onChange={this.handleChange}
                                    placeholder="john doe" 
                                />
                                <div className="invalid-feedback">
                                    {errors.name}
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Email Address</label>
                                <input 
                                    type="email" 
                                    className={errors.email || errors.emailexists ? "form-control is-invalid" : "form-control"} 
                                    name="email"
                                    value={email}
                                    onChange={this.handleChange}
                                    placeholder="name@address.com"
                                />
                                <div className="invalid-feedback">
                                    {errors.email}
                                    {errors.emailexists}
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="row">
                                    <div className="col">
                                        <label>Password</label>
                                    </div>
                                </div>
                                <div className="input-group input-group-merge">
                                    <input 
                                        type="password" 
                                        className={errors.password ? "form-control form-control-appended is-invalid" : "form-control form-control-appended"}
                                        name="password"
                                        value={password}
                                        onChange={this.handleChange} 
                                        placeholder="Enter your password" />
                                    <div className="input-group-append">
                                        <span className="input-group-text">
                                            <i className="fe fe-eye"></i>
                                        </span>
                                    </div>
                                    <div className="invalid-feedback">
                                        {errors.password}
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="row">
                                    <div className="col">
                                        <label>Confirm Password</label>
                                    </div>
                                </div>
                                <div className="input-group input-group-merge">
                                    <input 
                                        type="password" 
                                        className={errors.password_confirmation ? "form-control form-control-appended is-invalid" : "form-control form-control-appended"}
                                        name="password_confirmation"
                                        value={password_confirmation}
                                        onChange={this.handleChange}
                                        placeholder="Confirm your password" />
                                    <div className="input-group-append">
                                        <span className="input-group-text">
                                            <i className="fe fe-eye"></i>
                                        </span>
                                    </div>
                                    <div className="invalid-feedback">
                                        {errors.password_confirmation}
                                    </div>
                                </div>
                            </div>
                            <button disabled={this.props.auth.loading} className="btn btn-lg btn-block btn-primary mb-3" type="submit">
                                Sign up
                            </button>
                            <div className="text-center">
                                <small className="text-muted text-center">
                                    Already have an account? <Link to="/">Log in</Link>.
                                </small>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
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
    { registerUser }
) (withRouter(Register));