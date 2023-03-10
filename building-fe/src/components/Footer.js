import React from 'react'
import Logo from './Logo'
import '../css/footer.css'
import {
    Link
} from 'react-router-dom'

const Footer = () => {
    return (
        <div className="footer-container">
            <div style={{justifyContent: 'center', marginBottom: "30px", display: 'none'}} className="footer-logo">
                <Logo fz="50px" w1="150px" h1="80px" w2="450px" h2="70px" />
            </div>
            <div className="footer-content">
                <div className="footer-item footer-contact">
                    <div className="footer-item-title">Manage Company And Employees</div>
                    <div className="footer-contact-container">
                        <div className="footer-contact-item footer-contact-facebook">
                            <div className="footer-contact-title">Facebook</div>
                            <div className="footer-contact-content">aa</div>    
                        </div>
                        <div className="footer-contact-item footer-contact-email">
                            <div className="footer-contact-title">
                                <i className='bx bxs-envelope footer-contact-icon'></i>
                                Email
                            </div>
                            <div className="footer-contact-content">aa110502@gmail.com</div>
                        </div>
                        <div className="footer-contac-item footer-contact-phone">
                            <div className="footer-contact-title">
                                <i className='bx bxs-phone footer-contact-icon'></i>
                                Số điện thoại
                            </div>
                            <div className="footer-contact-content">
                                <span>+84</span> 375511200
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-item footer-contact">
                    <div className="footer-item-title">Manage Building Employee</div>
                    <div className="footer-contact-container">
                        <div className="footer-contact-item footer-contact-facebook">
                            <div className="footer-contact-title">Facebook</div>
                            <div className="footer-contact-content">bb</div>    
                        </div>
                        <div className="footer-contact-item footer-contact-email">
                            <div className="footer-contact-title">
                                <i className='bx bxs-envelope footer-contact-icon'></i>
                                Email
                            </div>
                            <div className="footer-contact-content">bb2000@gmail.com</div>
                        </div>
                        <div className="footer-contac-item footer-contact-phone">
                            <div className="footer-contact-title">
                                <i className='bx bxs-phone footer-contact-icon'></i>
                                Số điện thoại
                            </div>
                            <div className="footer-contact-content">
                                <span>+84</span> 375511200
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-item footer-contact">
                    <div className="footer-item-title">Manage Floors And Contract </div>
                    <div className="footer-contact-container">
                        <div className="footer-contact-item footer-contact-facebook">
                            <div className="footer-contact-title">Facebook</div>
                            <div className="footer-contact-content">Dat</div>    
                        </div>
                        <div className="footer-contact-item footer-contact-email">
                            <div className="footer-contact-title">
                                <i className='bx bxs-envelope footer-contact-icon'></i>
                                Email
                            </div>
                            <div className="footer-contact-content">dat@gmail.com</div>
                        </div>
                        <div className="footer-contac-item footer-contact-phone">
                            <div className="footer-contact-title">
                                <i className='bx bxs-phone footer-contact-icon'></i>
                                Số điện thoại
                            </div>
                            <div className="footer-contact-content">
                                <span>+84</span> 375511200
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-item footer-contact">
                    <div className="footer-item-title">Manage Registerd Services </div>
                    <div className="footer-contact-container">
                        <div className="footer-contact-item footer-contact-facebook">
                            <div className="footer-contact-title">Facebook</div>
                            <div className="footer-contact-content">Quang</div>    
                        </div>
                        <div className="footer-contact-item footer-contact-email">
                            <div className="footer-contact-title">
                                <i className='bx bxs-envelope footer-contact-icon'></i>
                                Email
                            </div>
                            <div className="footer-contact-content">quang@gmail.com</div>
                        </div>
                        <div className="footer-contac-item footer-contact-phone">
                            <div className="footer-contact-title">
                                <i className='bx bxs-phone footer-contact-icon'></i>
                                Số điện thoại
                            </div>
                            <div className="footer-contact-content">
                                <span>+84</span> 375511200
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
    )
}

export default Footer
