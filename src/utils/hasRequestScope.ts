export const hasRequestScope = (): boolean => {
    // TODO Add warning message if singleton provider has request provider in deps
    if (process.env.NODE_ENV !== 'production') {
        console.warn('You have request scope dependency in singleton scope provider. Keep in mind that this provider will be converted to request scope');
    }

    return false;
}
