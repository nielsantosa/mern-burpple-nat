import React from 'react'
import { NextPage } from 'next'
import LinkWrapper from '../components/linkWrapper'
import { defaultImage } from '../lib/consts'

const Index: NextPage = () => {
  return(
    <div>
      <div className="bg-gray-100 py-20">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-4">My Restaurants</h1>
          <p className="text-gray-600 text-lg mb-8">
            Discover the best restaurants in town.
          </p>
          <div className="relative h-96 rounded-lg overflow-hidden">
            <img
              src={defaultImage}
              alt="Restaurant Banner"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div>
                <h2 className="text-white text-3xl font-bold">
                  Explore My Collections <LinkWrapper href="/restaurants">Here</LinkWrapper>.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index