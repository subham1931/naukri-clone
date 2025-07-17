import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import styles from "../common/HiringSection.module.css";

const categories = [
  { title: "MNCs", count: "2.2K+", logos: ["GEA", "VISTRA", "wave", "o9"] },
  { title: "Fintech", count: "126", logos: ["tide", "one", "card"] },
  {
    title: "FMCG & Retail",
    count: "165",
    logos: ["gokul", "cantabil", "jcpenney"],
  }
  ,{
    title: "FMCG & Retail",
    count: "165",
    logos: ["gokul", "cantabil", "jcpenney"],
  }
  ,{
    title: "FMCG & Retail",
    count: "165",
    logos: ["gokul", "cantabil", "jcpenney"],
  }
  ,{
    title: "FMCG & Retail",
    count: "165",
    logos: ["gokul", "cantabil", "jcpenney"],
  },
  {
    title: "Startups",
    count: "675",
    logos: ["dd", "betaNXT", "bs", "pharmarack"],
  },
  { title: "Edtech", count: "158", logos: ["eduncle", "lead"] },
];

const featuredCompanies = [
  {
    name: "Cognizant",
    rating: 3.7,
    reviews: "54.9K+",
    desc: "Leading ITeS company with global presence.",
    logo: "https://img.naukimg.com/logo_images/groups/v2/3835862.gif",
  },
  {
    name: "Jio",
    rating: 4.1,
    reviews: "26.1K+",
    desc: "True 5G is here to unlock the limitless era.",
    logo: "https://img.naukimg.com/logo_images/groups/v2/2095704.gif",
  },
  {
    name: "Amazon",
    rating: 4.0,
    reviews: "27.5K+",
    desc: "World's largest Internet company.",
    logo: "https://img.naukimg.com/logo_images/groups/v2/4156.gif",
  },
  {
    name: "Bp",
    rating: 3.8,
    reviews: "473",
    desc: "We're with you",
    logo: "https://img.naukimg.com/logo_images/groups/v2/1302864.gif",
  },
  {
    name: "Infosys",
    rating: 4.2,
    reviews: "52K+",
    desc: "Global leader in consulting, technology and outsourcing.",
    logo: "https://img.naukimg.com/logo_images/groups/v2/12640.gif",
  },
  {
    name: "TCS",
    rating: 4.0,
    reviews: "60K+",
    desc: "Global IT services, consulting and business solutions.",
    logo: "https://img.naukimg.com/logo_images/groups/v2/13236.gif",
  },
  {
    name: "HCL",
    rating: 3.9,
    reviews: "40K+",
    desc: "Global IT company.",
    logo: "https://img.naukimg.com/logo_images/groups/v2/10208.gif",
  },
];

// Pagination size
const CATEGORY_PAGE_SIZE = 3;
const FEATURED_PAGE_SIZE = 4;

const HiringSection = () => {
  const [catPage, setCatPage] = useState(0);
  const [featPage, setFeatPage] = useState(0);

  const totalCatPages = Math.ceil(categories.length / CATEGORY_PAGE_SIZE);
  const totalFeatPages = Math.ceil(
    featuredCompanies.length / FEATURED_PAGE_SIZE
  );

  const visibleCategories = categories.slice(
    catPage * CATEGORY_PAGE_SIZE,
    catPage * CATEGORY_PAGE_SIZE + CATEGORY_PAGE_SIZE
  );

  const visibleFeatured = featuredCompanies.slice(
    featPage * FEATURED_PAGE_SIZE,
    featPage * FEATURED_PAGE_SIZE + FEATURED_PAGE_SIZE
  );

  return (
    <div className={styles.wrapper}>
      <Container style={{ backgroundColor: "", width:"78%" }}>
        <h2 className={styles["section-title"]}>Top companies hiring now</h2>

        <Row className="mb-3">
          {visibleCategories.map((cat, idx) => (
            <Col key={idx} md={4} sm={6} xs={12} className="mb-4">
              <Card className={styles["category-card"]}>
                <Card.Body>
                  <Card.Title>{cat.title}</Card.Title>
                  <p>{cat.count} are actively hiring</p>
                  <div className={styles["logo-row"]}>
                    {cat.logos.map((logo, i) => (
                      <img
                        key={i}
                        src={`https://via.placeholder.com/30?text=${logo}`}
                        alt={logo}
                      />
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <div className="d-flex justify-content-between mb-5">
          <Button
            disabled={catPage === 0}
            onClick={() => setCatPage(catPage - 1)}
          >
            Previous
          </Button>
          <Button
            disabled={catPage === totalCatPages - 1}
            onClick={() => setCatPage(catPage + 1)}
          >
            Next
          </Button>
        </div>

        <h2 className={styles["section-title"]}>
          Featured companies actively hiring
        </h2>

        <Row>
          {visibleFeatured.map((comp, idx) => (
            <Col key={idx} md={3} sm={6} xs={12} className="mb-4">
              <Card className={styles["company-card"]}>
                <Card.Body>
                  <div className="mb-2">
                    <img
                      src={comp.logo}
                      alt={comp.name}
                      className="mb-3"
                      style={{ height: "50px", objectFit: "contain" }}
                    />
                  </div>
                  <Card.Title>{comp.name}</Card.Title>
                  <p className={styles.rating}>
                    ⭐ {comp.rating} &nbsp; | &nbsp; {comp.reviews} reviews
                  </p>
                  <p>{comp.desc}</p>
                  <Button className={styles["job-button"]}>View jobs</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <div className="d-flex justify-content-between mt-3">
          <Button
            disabled={featPage === 0}
            onClick={() => setFeatPage(featPage - 1)}
          >
            Previous
          </Button>
          <Button
            disabled={featPage === totalFeatPages - 1}
            onClick={() => setFeatPage(featPage + 1)}
          >
            Next
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default HiringSection;
