import {Poppins} from 'next/font/google'

import { cn } from '@/lib/utils'

const font = Poppins({
    weight: '600',
    subsets: ['latin']
})

interface HeaderProps {
    label: string
}

export const Header = ({label}: HeaderProps) => {
    return (
        <div className='w-full flex flex-col gap-y-4 justify-center items-center text-3xl font-semibold'>
            <h1 className={cn(font.className)}>Auth</h1>
            <p className='text-muted-foreground text-sm'>{label}</p>
        </div>
    )
}