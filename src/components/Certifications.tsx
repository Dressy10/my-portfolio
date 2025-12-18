import './Certifications.css';

interface Certification {
  id: number;
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
  badgeUrl?: string;
}

const Certifications = () => {
  const certifications: Certification[] = [
    {
      id: 1,
      name: 'Microsoft Certified: Cybersecurity Architect Expert (SC-100)',
      issuer: 'Microsoft',
      date: '',
      credentialUrl: 'https://learn.microsoft.com/api/credentials/share/en-us/SamuelDressman-9382/22B5322782BB9700?sharingId',
    },
    {
      id: 2,
      name: 'Microsoft Certified: Azure Solutions Architect Expert (AZ-305)',
      issuer: 'Microsoft',
      date: '',
      credentialUrl: 'https://learn.microsoft.com/api/credentials/share/en-us/SamuelDressman-9382/E7C4645C6BA7A51A?sharingId=B861ADA2317674BC',
    },
    {
      id: 3,
      name: 'Microsoft Certified: DevOps Engineer Expert (AZ-400)',
      issuer: 'Microsoft',
      date: '',
      credentialUrl: 'https://learn.microsoft.com/api/credentials/share/en-us/SamuelDressman-9382/591A38A64EA54504?sharingId=B861ADA2317674BC',
    },
    {
      id: 4,
      name: 'Microsoft Certified: Azure Developer Associate (AZ-204)',
      issuer: 'Microsoft',
      date: '',
      credentialUrl: 'https://learn.microsoft.com/api/credentials/share/en-us/SamuelDressman-9382/79BCA9A693BCA83E?sharingId',
    },
    {
      id: 5,
      name: 'Microsoft Certified: Azure Security Engineer Associate (AZ-500)',
      issuer: 'Microsoft',
      date: '',
      credentialUrl: 'https://learn.microsoft.com/api/credentials/share/en-us/SamuelDressman-3869/8EC10A4EAAA8CBC0?sharingId',
    },
    {
      id: 6,
      name: 'Microsoft Certified: Security Operations Analyst Associate (SC-200)',
      issuer: 'Microsoft',
      date: '',
      credentialUrl: 'https://learn.microsoft.com/api/credentials/share/en-us/SamuelDressman-9382/68775C18A5C60779?sharingId',
    },
    {
      id: 7,
      name: 'Microsoft Certified: Azure Administrator Associate (AZ-104)',
      issuer: 'Microsoft',
      date: '',
      credentialUrl: 'https://learn.microsoft.com/api/credentials/share/en-us/SamuelDressman-9382/A8FFC7A53623FA14?sharingId=B861ADA2317674BC',
    },
    {
      id: 8,
      name: 'Project Management Professional (PMP)',
      issuer: 'Project Management Institute (PMI)',
      date: '',
    },
    {
      id: 9,
      name: 'Human Resource Management Professional (HRMP)',
      issuer: 'HR Certification Institute',
      date: '',
    },
    {
      id: 10,
      name: 'Google IT Support Professional Certificate',
      issuer: 'Google / Coursera',
      date: '',
      credentialUrl: 'https://www.coursera.org/account/accomplishments/specialization/9VKJWPHG9CUY',
    },
    {
      id: 11,
      name: 'Google Data Analytics Professional Certificate',
      issuer: 'Google',
      date: '',
      credentialUrl: 'https://www.credly.com/badges/4204ae0f-a65c-4d20-9cf4-df6ddff05111/linked_in_profile',
    },
    {
      id: 12,
      name: 'Health, Safety, and Environment (HSE 1, 2, 3)',
      issuer: 'Occupational Safety and Health Administration',
      date: '',
    },
  ];

  return (
    <section id="certifications" className="certifications">
      <div className="container">
        <h2 className="section-title">Certifications</h2>
        <div className="certifications-grid">
          {certifications.map((cert) => (
            <div key={cert.id} className="certification-card">
              <div className="certification-header">
                <h3 className="certification-name">{cert.name}</h3>
                {cert.date && <span className="certification-date">{cert.date}</span>}
              </div>
              <p className="certification-issuer">{cert.issuer}</p>
              {cert.credentialId && (
                <p className="certification-id">
                  Credential ID: <span>{cert.credentialId}</span>
                </p>
              )}
              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="certification-link"
                >
                  Verify Credential →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

