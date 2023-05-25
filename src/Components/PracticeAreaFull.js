import React from 'react'
import Banner from './Banner'

function PracticeAreaFull() {
   
    return (
        <>
<Banner/>

            <div className='container-fluid py-md-5'>
                <div className='container'>
                    <div className='row practice-area-heading py-md-4 pb-3 text-center justify-content-center'>
                        <h1>Our Practice Areas</h1>
                        <h3>We represent our client's best interests, providing personal legal assistance, handling business affairs, and representing them in disputes before government and administrative agencies.</h3>
                    </div>
                    <div className='practice-area-heading'>
                        <ol>
                            <li>Drug Offences</li>
                            <p>Our lawyer offers legal expertise, investigates the case, negotiates plea bargains, represents the defendant in court, advocates for fair sentencing, and guides through the appeals process for our clients.</p>
                            <li>Sexual Offences</li>
                            <p>Our sexual offences lawyer provides vital aid: legal expertise, evidence analysis, credibility challenges, rights protection, navigating laws, strategic defence planning—ensuring fair trials and safeguarding interests.</p>
                            <li>Firearm Offences</li>
                            <p>With our expertise, we analyse your case, examine evidence, challenge search legality, negotiate pleas, develop defence strategies, and provide courtroom advocacy to minimise penalties or secure acquittals.</p>
                            <li>Licence suspensions</li>
                            <p>Our criminal lawyer assists in licence suspensions by reviewing the case, identifying legal options, advocating for rights, challenging suspension grounds, negotiating with authorities, and pursuing licence reinstatement to minimise the impact on driving privileges.</p>
                            <li>Drink driving and other serious driving offences</li>
                            <p>We handle drunk driving and serious driving offences, analysing evidence, challenging breathalyser results, negotiating pleas, crafting defence strategies, and representing clients in court to minimise penalties and achieve favourable outcomes.</p>
                            <li>Bail applications</li>
                            <p>Our assistance in the bail process includes advocating for release, presenting eligibility arguments, gathering evidence, challenging conditions, and negotiating for a reasonable bail amount with the prosecution.</p>
                        </ol>
                    </div>
                </div>
            </div>

        </>
    )
}

export default PracticeAreaFull