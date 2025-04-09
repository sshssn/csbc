import { Suspense } from 'react';

export function withSuspense<P extends object>(
  WrappedComponent: React.ComponentType<P>
) {
  return function WithSuspenseWrapper(props: P) {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <WrappedComponent {...props} />
      </Suspense>
    );
  };
} 