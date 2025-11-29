import React from "react";

const ContactForm = () => {
    return (
        <div className="text-white">
            <form>
                <div className="flex flex-col border-b-2 border-orange-700">
                    <label htmlFor="name" className="uppercase">Full Name</label>
                    <input type="text" id="name" placeholder="Jane Smith" className="outline-none focus:border focus:border-blue-500 focus:rounded-lg bg-black p-4 opacity-70 focus:opacity-100"/>
                </div>
                <div className="flex flex-col lg:flex-row gap-4 py-8">
                    <div className="flex flex-col border-b-2 border-orange-700">
                        <label htmlFor="phone" className="uppercase">Phone</label>
                        <input type="text" id="phone" placeholder="+0101234567" className="outline-none focus:border focus:border-blue-500 focus:rounded-lg bg-black p-4 opacity-70 focus:opacity-100"/>
                    </div>
                    <div className="flex flex-col border-b-2 border-orange-700">
                        <label htmlFor="email" className="uppercase">Email</label>
                        <input type="email" id="email" placeholder="name@gmail.com" className="outline-none focus:border focus:border-blue-500 focus:rounded-lg bg-black p-4 opacity-70 focus:opacity-100"/>
                    </div>
                </div>
                <div className="flex flex-col border-b-2 border-orange-700">
                    <label htmlFor="message" className="uppercase">MESSAGE</label>
                    <textarea id="message" placeholder="Write your messages here" className="outline-none focus:border focus:border-blue-500 focus:rounded-lg bg-black p-4 opacity-70 focus:opacity-100 h-[120px]"/>
                </div>
                <button type="submit" className="bg-white text-black font-bold w-full p-3 mt-4 rounded-lg hover:opacity-70">Submit</button>
            </form>
        </div>
    );
}

export default ContactForm;