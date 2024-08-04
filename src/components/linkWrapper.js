import React from 'react';
import Link from 'next/link';

const defaultClassName = 'underline';

const LinkWrapper = ({ href, children, className = defaultClassName, ...props }) => {
  return (
    <Link href={href} className={className} {...props}>
        {children}
    </Link>
  );
};

export default LinkWrapper;