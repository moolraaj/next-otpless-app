
 
import { DbConnect } from '@/database/databse';
import subjectModel from '@/model/subjectModel';
 
import cache from 'memory-cache';
import { NextResponse } from 'next/server';

 
const cacheKey = `subjectModel`;
const cacheTTL = 10 * 60 * 1000;  
DbConnect()
export async function GET(req) {
 

 
  const cachedUsers = cache.get(cacheKey);
  console.log(`cachedUsers`)
  console.log(cachedUsers)
  if (cachedUsers) {
    console.log('Serving from cache');
    return NextResponse.json(cachedUsers);
  }

 
    try {
      const result = await subjectModel.find({});
      console.log(result)
     
      cache.put(cacheKey, result, cacheTTL);  

      return NextResponse.json(result);
    } catch (error) {
      return NextResponse.json({ error: 'Internal Server Error' });
    }
  }

 

