import Category from '@/Components/Category'
import Company from '@/Components/Company'
import Footer from '@/Components/Footer'
import Header from '@/Components/Header'
import Hero from '@/Components/Hero'
import HomeJob from '@/Components/HomeJob'
import Location from '@/Components/Location'
import { usePage } from '@inertiajs/react'
import React from 'react'

export default function Home() {
    const{user} = usePage().props;
  return (
    <>
        <Header></Header>
        <main className="main mt-80">
            <Hero></Hero>
            <HomeJob></HomeJob>
            <Category></Category>
            <Location></Location>
            <Company></Company>   
        </main>
        <Footer></Footer>
    </>
  )
}
