import React from 'react';

const Blogs = () => {
    return (
        <div className="container w-50 mx-auto">
      <div className="about-text">
        <h1>Difference between authorization and authentication</h1>
        <p>
          authentication is the process of verifying who someone is, whereas
          authorization is the process of verifying what specific applications,
          files, and data a user has access to. The situation is like that of an
          airline that needs to determine which people can come on board. The
          first step is to confirm the identity of a passenger to make sure they
          are who they say they are. Once a passenger’s identity has been
          determined, the second step is verifying any special services the
          passenger has access to, whether it’s flying first-class or visiting
          the VIP lounge. In the digital world, authentication and authorization
          accomplish these same goals. Authentication is used to verify that
          users really are who they represent themselves to be. Once this has
          been confirmed, authorization is then used to grant the user
          permission to access different levels of information and perform
          specific functions, depending on the rules established for different
          types of users.
        </p>
      </div>
      <div className="about-text">
        <h1>Why are you using firebase</h1>
        <p>
          Firebase is Google’s mobile application development platform. It has a
          lot of different products that cover much of what’s needed to build a
          mobile app. It would take a lot of time to describe the complete set
          of situations where Firebase can be helpful, so I suggest you start
          reading the web site to discover what all it can do.
        </p>
        <h1>What other options do you have to implement authentication</h1>
        <p>
          Authentication is common way to handle security for all applications.
          This is only way to answer the question “who you are?” to the
          application, when comes to stateless architecture or service oriented
          architecture we got lot of new concepts and technologies in the
          market. In this article we will learn how to handle authentication on
          RESTful APIs.
        </p>
      </div>
      <div className="about-text">
        <h1>
          What other services does firebase provide other than authentication
        </h1>
        <p>
          Firebase frees developers to focus crafting fantastic user
          experiences. You don’t need to manage servers. You don’t need to write
          APIs. Firebase is your server, your API and your datastore, all
          written so generically that you can modify it to suit most needs.
          Yeah, you’ll occasionally need to use other bits of the Google Cloud
          for your advanced applications. Firebase can’t be everything to
          everybody. But it gets pretty close.
        </p>
      </div>
    </div>
    );
};

export default Blogs;