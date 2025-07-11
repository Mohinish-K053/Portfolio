import picture1 from '/src/assets/projects/Picture-1.png';
import picture2 from '/src/assets/projects/Picture-2.webp';
import picture3 from '/src/assets/projects/Picture-3.webp';

export const PROJECTS = [
  {
    title: "Snuggle Sanctuary - Animal Shelter Project",
    image: picture1,
    description:
      "Snuggle Sanctuary is a compassionate web portal designed to connect individuals who can no longer care for their pets with those willing to adopt and provide them with a loving home. This platform serves as a bridge, ensuring that pets are rehomed responsibly and receive the care they deserve.",
    technologies: ["HTML", "Tailwind CSS", "React", "Node.js", "MongoDB", "Auth0"],
  },
  {
    title: "CloudFormation - Automated Cloud Infrastructure Deployment",
    image: picture2,
    description:
      "CloudFormation is a service designed to automate the deployment and management of cloud infrastructure. By using CloudFormation, you can define your cloud resources in a standardized, code-based format, enabling efficient, consistent, and repeatable infrastructure provisioning.",
    technologies: ["AWS", "YAML", "CloudFormation"],
  },
  {
    title: "Hosting Multiple Websites on a Single EC2 Instance",
    image: picture3,
    description:
      "Hosting multiple websites on a single Amazon EC2 instance is an efficient and cost-effective approach for managing web applications. By leveraging a single server, businesses can optimize resource usage while maintaining separate domains or subdomains for each website.",
    technologies: ["AWS", "EC2", "CentOS", "Linux CLI"],
  },
  {
    title: "Quorica",
    image: null,
    description:
      "Quorica is a cloud-based web application designed to provide secure storage for your data. With features like QR code-based folder access, identity verification, and multiple authentication methods, Quorica ensures that your files are safely stored and shared only with those you trust. Whether you're an individual looking to store personal data or a business seeking secure document sharing, Quorica offers a seamless experience with robust security and a user-friendly interface.",
    technologies: ["React js", "python", "flask", "AWS Cognito", "MongoDB", "terraform"],
    moretech: ["AWS S3", "AWS CloudFront", "AWS ECS", "Docker", "AWS Route53", "AWS ALB"],
  },

];
export const EXPERIENCES = [
  {
    years: "Apr-2025 - Present",
    role: "DevOps-Engineer",
    company: "Pearlthoughts",
    description: `Gained hands-on experience working on live cloud-native projects involving Kubernetes and AWS
infrastructure.
• Learned and implemented Helm for Kubernetes application packaging and deployment.
• Designed and executed Blue-Green Deployment strategies for zero-downtime releases on AWS ECS
using CodeDeploy and ALB.
• Monitored application performance and health using Grafana integrated with Prometheus and
custom dashboards.
• Collaborated closely with cross-functional teams to identify and resolve infrastructure and application errors.
• Improved troubleshooting efficiency and deployment stability through team-based issue resolution
and CI/CD pipeline optimization.
• Developed skills in container orchestration, log analysis, error resolution, and automation best
practices.
• Gained hands-on experience with production deployments, client communication, and managing
production infrastructure to ensure 24/7 availability with zero downtime.
• Also learned valuable life and professional skills such as time management, accountability, effective
communication, team collaboration, and the importance of continuous learning in a fast-paced
DevOps environment.`,
    technologies: ["Python", "Terraform", "Helm", "Grafana", "ECS", "ECR", "Docker", "Kubernetes", "Ansible", "Linux", "Github-Actions"]
  },
];

export const CONTACT ={
  address: "Pune, Maharashtra",
  PhoneNo: "+91 7841082874",
  Email: "mohinish.k053@gmail.com",
};

