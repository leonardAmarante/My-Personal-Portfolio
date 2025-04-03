import Input from "../components/generic/input";

export default function ContactSection() {
    const formspreeUrl = import.meta.env.VITE_FROMSPREE_URL;  
    // Handles form submission
    function formHandling(event) {
        event.preventDefault();  // Prevents page refresh

       return formspreeUrl;
       
    }

    return (
        <>
            {/* Contact Form */}
            <form
                className="block form-content row d-flex justify-content-center mb-7"
                 action={formspreeUrl}
                method="POST"
                id="contact"
            >
                {/* Section Title */}
                <div className="col-12 text-center mb-5">
                    <h3 className="sm-fs bigFs-6">Contact Me!</h3>
                </div>

                {/* Name Input Field */}
                <Input
                    labelText="Insert Your Name"
                    placeholder="Francisco Garcia"
                    type="text"
                    name="name"
                    inputClass=""
                    containerClass="col-12 col-lg-6 d-flex justify-content-center justify-content-lg-end"
                />

                {/* Email Input Field */}
                <Input
                    labelText="Insert Email"
                    placeholder="example123@gmail.com"
                    type="text"
                    name="email"
                    inputClass="hola"
                    containerClass="col-12 col-lg-6 d-flex justify-content-center justify-content-lg-start align-items-end"
                />

                {/* Message Input Field (Textarea) */}
                <div className="message-container col-12 d-flex justify-content-center mb-4">
                    <textarea
                        className="message"
                        name="message"
                        placeholder="Write your message..."
                        required
                    />
                </div>

                {/* Submit Button */}
                <div className="btn-container col-12 d-flex justify-content-center align-items-center mb-5">
                    <button type="submit">Submit</button>
                </div>

            </form>
        </>
    );
}