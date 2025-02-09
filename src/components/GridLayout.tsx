interface GridLayoutProps {
    className: string
    children: React.ReactNode
}

export const GridLayout = ({ className, children }: GridLayoutProps) => {
    return <>
        <div className={className}>
            {children}
        </div>
    </>
}
