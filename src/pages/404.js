import React from 'react';
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'
const notFound = () => {
    return(
<Layout>
    <Head title="404"/>
    <h1>PAGE NOT FOUND 404 </h1>
    <p><Link to="/">Go home!</Link></p>
</Layout>
    )
}

export default notFound