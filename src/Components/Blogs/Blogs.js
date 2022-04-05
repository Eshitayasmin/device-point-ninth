import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='text-left mx-8 md:mx-36'>
            <div className='border border-blue-500 mt-12 p-8 '>
                <p className='text-2xl font-bold mb-3'>Question: What is a purpose of Context Api?</p>
                <p className='text-xl font-semibold'>Answer:</p>

                <p className='text-md md:text-lg'>In React application data is passed between two components via props. Prop drilling is a required if data needs to be sent from one component to another. The Context Api is a React structure that enables you to unique details. It provides a way to share data to multiple components without having to pass props down manually. It solving prop-drilling from all levels of your application.</p>
            </div>

            <div className='border border-blue-500 mt-12 p-8 '>
               <p className='text-2xl font-bold mb-3'>Question: What is a Semantic Tags?</p>
               <p className='text-xl font-semibold'>Answer:</p>
               <p className='text-md md:text-lg'>There are are two types of HTML Tags, one is semantic tags and other is non-semantic tags. HTML5 Semantic tags are header, nav, main, section, table, footer etc. Semantic tags have meaning full name which defines the purpose of the element. It helps the search engines and other user devices to determine the important of web page. It make the code easier to write and understand for the developer. For users who are blind or visually impaired, Semantic tags will allow screen readers to more accurately communicate your content.</p>
            </div>
        </div>
    );
};

export default Blogs;