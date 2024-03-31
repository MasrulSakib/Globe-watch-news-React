import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
    return (
        <div className='d-flex flex-column justify-content-center align-items-center'>
            <h2>Terms and Conditions</h2>
            <p>
                1. Acceptance of Terms: By accessing or using this online news portal, you agree to comply with and be bound by these terms and conditions. <br />
                2. Content Usage: The content provided on this news portal is for informational purposes only. It is subject to change without notice. Reproduction or distribution of any content from this portal without prior written consent is prohibited. <br />
                3. Accuracy of Information: While we strive to provide accurate and up-to-date information, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information contained on this portal. <br />
                4. Third-Party Links: This portal may contain links to third-party websites or services that are not owned or controlled by us. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services. <br />
                5. User Conduct: You agree not to use this portal for any unlawful purpose or to engage in any conduct that may disrupt or interfere with the operation of the portal or the enjoyment of other users. <br />
                6. Intellectual Property: All content on this portal, including but not limited to text, graphics, logos, images, and software, is the property of Globe Watch News and is protected by copyright laws. Unauthorized use of any content may violate copyright, trademark, and other laws. <br />
                7. Privacy Policy: Your use of this portal is subject to our Privacy Policy, which can be found  Privacy Policy. By using this portal, you consent to the collection and use of your information as described in the Privacy Policy. <br />
                8. Limitation of Liability: Globe Watch News shall not be liable for any direct, indirect, incidental, special, or consequential damages arising out of or relating to the use or inability to use the portal. <br />
                9. Changes to Terms: Globe Watch News reserves the right to update or modify these terms and conditions at any time without prior notice. Your continued use of the portal after any such changes constitutes your acceptance of the new terms. <br />
                10. Governing Law: These terms and conditions shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions. <br />
                11. Contact Information: If you have any questions or concerns about these terms and conditions, please contact us at Globe Watch News. <br />
                By using this online news portal, you acknowledge that you have read, understood, and agree to be bound by these terms and conditions.</p> <br />

            <>go back to registration: <Link to={'/register'}>Registration</Link></>
        </div>
    );
};

export default TermsAndConditions;