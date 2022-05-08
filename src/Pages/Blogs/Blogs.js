import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className=" blog-container" style={{ minHeight: "100vh" }}>
      <div className="blog">
        <h5>Difference between javascript and nodejs?</h5>
        <hr className="w-50 text-white mx-auto my-2" />
        <p>
          Javascript is a programming language used for writing scripts at the
          website. It may most effective be run in the browsers and basically
          used on the client-aspect. Javascript is capable sufficient to feature
          html and play with the dom. It is able to run in any browser engine as
          like JS core in safari and Spidermonkey in firefox. Javascript is
          utilized in frontend development & a number of the javascript
          frameworks are ramdajs, typedjs, and so forth. It is the upgraded
          version of ECMA script that uses chrome's v8 engine written in c++.{" "}
          <br /> Where Nodejs is a javascript runtime environment. It can run
          javascript outdoor the browser with the help of nodejs . It mostly
          used on the server-side & server-facet development. Nodejs does no
          longer have capability to feature html tags. A number of the nodejs
          modules are lodash, explicit and so on. Those modules are to be
          imported from npm. Nodejs is written in c, c++ and javascript.
        </p>
      </div>
      <div className="blog">
        <h5>When should you use nodejs and when should you use mongodb?</h5>
        <hr className="w-50 text-white mx-auto my-2" />
        <p>
          Mongodb and nodejs are two special technologies. Monogdb is a database
          machine which gives you a hazard to efficiently store files in a
          database and to perform operations like facts updates, or to look
          documents with the aid of some criterias. Nodejs is a javascript
          engine that you could write any application you need with (by
          programming within the javascript language). It runs your javascript
          code. Maximum usually, it's miles used to construct servers that could
          respond to internet requests, though it is able to be used for lots of
          other types of code too. Mongodb is a database engine. Code inside
          some application or server uses mongodb to keep, question or replace
          facts in a database. There are numerous web servers built with nodejs
          as a way to then use mongodb for storing records.
        </p>
      </div>
      <div className="blog">
        <h5>Differences between sql and nosql databases?</h5>
        <hr className="w-50 text-white mx-auto my-2" />
        <p>
          1. SQL databases are categorized as Relational Database Management
          System (RDBMS), NoSQL databases are categorized as Non-relational or
          distributed database system.
          <br /> 2. SQL databases have fixed or static or predefined schema,
          NoSQL databases have dynamic schemas for unstructured data. <br /> 3.
          SQL databases are vertically scalable, while NoSQL databases are
          horizontally scalable. <br /> 4. SQL databases are not best suited for
          hierarchical data storage, NoSQL databases are best suited for
          hierarchical data storage. <br /> 5. SQL databases are better for
          multi-row complex operation, while NoSQL is better for unstructured
          data like documents or JSON.
        </p>
      </div>
      <div className="blog">
        <h5>What is the purpose of jwt and how does it work?</h5>
        <hr className="w-50 text-white mx-auto my-2" />
        <p>
          JWT, or json web token, is an open well known standard used to share
          facts among parties securely — a client and a server. In maximum
          instances, it's an encoded JSON containing a set of claims and a
          signature. It's generally used inside the context of different
          authentication mechanisms like OAuth, OpenID to provide person-related
          information. It's a popular process to authenticate/authorize users in
          a microservice architecture. Whilst user sign-in using username and
          password. The authentication server verifies the credentials and
          issues a jwt signed the usage of a personal key. Moving ahead, the
          client will use the jwt to get right of entry to blanketed sources by
          way of passing the jwt in the http authorization header. The resource
          server then verifies the authenticity of the token the usage of the
          general public key.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
