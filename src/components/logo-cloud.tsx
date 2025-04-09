import React from 'react'

export const LogoCloud = () => {
    return (
        <section className="bg-background pb-16 md:pb-32">
            <div className="group relative m-auto max-w-6xl px-6">
                <div className="flex flex-col items-center md:flex-row">
                    <div className="inline md:max-w-44 md:border-r md:pr-6">
                        <p className="text-end text-sm">Trusted by global partners</p>
                    </div>
                    <div className="relative py-6 md:w-[calc(100%-11rem)]">
                        <div className="flex space-x-12 overflow-hidden">
                            <div className="flex animate-marquee">
                                <div className="flex items-center mx-4">
                                    <svg className="h-5 w-fit text-foreground" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
                                        <path d="M3 9V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4" />
                                        <path d="M9 16h.01" />
                                        <path d="M15 16h.01" />
                                    </svg>
                                    <span className="ml-2 text-sm font-semibold">Emirates</span>
                                </div>

                                <div className="flex items-center mx-4">
                                    <svg className="h-5 w-fit text-foreground" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M4 11a9 9 0 0 1 9 9" />
                                        <path d="M4 4a16 16 0 0 1 16 16" />
                                        <circle cx="5" cy="19" r="1" />
                                    </svg>
                                    <span className="ml-2 text-sm font-semibold">Aramex</span>
                                </div>

                                <div className="flex items-center mx-4">
                                    <svg className="h-5 w-fit text-foreground" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect width="16" height="16" x="4" y="4" rx="2" />
                                        <path d="M4 13h16" />
                                        <path d="M13 4v16" />
                                    </svg>
                                    <span className="ml-2 text-sm font-semibold">DHL</span>
                                </div>

                                <div className="flex items-center mx-4">
                                    <svg className="h-5 w-fit text-foreground" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M7 10v12" />
                                        <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
                                    </svg>
                                    <span className="ml-2 text-sm font-semibold">FedEx</span>
                                </div>

                                <div className="flex items-center mx-4">
                                    <svg className="h-5 w-fit text-foreground" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M19 16v3H5v-3" />
                                        <path d="M12 6v8" />
                                        <path d="m9 11 3-3 3 3" />
                                    </svg>
                                    <span className="ml-2 text-sm font-semibold">Maersk</span>
                                </div>

                                <div className="flex items-center mx-4">
                                    <svg className="h-5 w-fit text-foreground" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
                                    </svg>
                                    <span className="ml-2 text-sm font-semibold">Saudi Post</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-background absolute inset-y-0 left-0 w-20"></div>
                        <div className="bg-gradient-to-l from-background absolute inset-y-0 right-0 w-20"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
