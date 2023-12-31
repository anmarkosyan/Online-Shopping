import brandItems from "../data/cars.json"
import {Col, Row} from "react-bootstrap";
import {BrandItem} from "../components/BrandItem.tsx";

export const BRANDS = () => {
    return (
        <>
            <h1 className="p-3 mb-2 bg-primary text-white">Store</h1>
            <Row md={2} xs={1} lg={3} className="g-3">
                {brandItems.map(item => (
                    <Col key={item.id}>
                        <BrandItem {...item} />
                    </Col>
                ))}
            </Row>
        </>
    )
}