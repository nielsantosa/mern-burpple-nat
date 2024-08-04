import React from 'react'
import { NextPage } from 'next'
import Link from 'next/link'
import LinkWrapper from '../components/linkWrapper'

const Index: NextPage = () => (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <h1 className="text-3xl font-bold">
        Welcome to the Homepage!
      </h1>
      <div>
        See all restaurants. Click <LinkWrapper href="/restaurants">here</LinkWrapper>.
      </div>
      <div>
        See your collections. Click <LinkWrapper href="/collections">here</LinkWrapper>.
      </div>
    </div>
)

export default Index