import { CardHorizontal, CardNormal, CardHeader, CardBody, CardFooter, CardTitle, CardSubtitle, CardMedia } from '../../card';
import { ActionButtons } from '../../action-buttons';
import { Button } from '../../button';
import { Layout } from '../../layout';
import { Avatar } from '../../avatar';
import { TypographyDisplay1, TypographyDisplay2, TypographyH2, TypographyH3 } from '../../typography';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-3">

            <CardHorizontal>
                <CardBody title="Card Title" subtitle="Card Subtitle">
                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </CardBody>
                <ActionButtons alignment="stretched" orientation="vertical" className="k-card-actions">
                    <Button fillMode="flat" themeColor="primary">Action 1</Button>
                    <Button fillMode="flat" themeColor="primary">Action 2</Button>
                </ActionButtons>
            </CardHorizontal>

            <CardHorizontal>
                <CardMedia src="/packages/html/assets/avatar.jpg" />
                <Layout orientation="vertical" className="k-flex">
                    <CardBody title="Card Title" subtitle="Card Subtitle">
                        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </CardBody>
                    <span className="k-separator"></span>
                    <ActionButtons alignment="stretched" className="k-card-actions">
                        <Button fillMode="flat" themeColor="primary">Action 1</Button>
                        <Button fillMode="flat" themeColor="primary">Action 2</Button>
                    </ActionButtons>
                </Layout>
            </CardHorizontal>

            <CardHorizontal>
                <CardMedia>
                    <img src="/packages/html/assets/avatar.jpg" />
                </CardMedia>
                <span className="k-separator k-separator-vertical"></span>
                <Layout orientation="vertical" className="k-flex">
                    <CardBody title="Card Title" subtitle="Card Subtitle">
                        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </CardBody>
                    <span className="k-separator"></span>
                    <ActionButtons alignment="stretched" className="k-card-actions">
                        <Button fillMode="flat" themeColor="primary">Action 1</Button>
                        <Button fillMode="flat" themeColor="primary">Action 2</Button>
                    </ActionButtons>
                </Layout>
            </CardHorizontal>

            <CardNormal>
                <CardBody title="Sofia" subtitle="Sunny" className="k-text-center">
                    <TypographyDisplay1>☀️</TypographyDisplay1>
                    <TypographyDisplay2>2&deg;C</TypographyDisplay2>
                </CardBody>
                <span className="k-separator"></span>
                <ActionButtons alignment="stretched" className="k-card-actions">
                    <Button fillMode="flat" themeColor="primary">Action 1</Button>
                    <Button fillMode="flat" themeColor="primary">Action 2</Button>
                </ActionButtons>
            </CardNormal>

            <CardNormal>
                <CardBody title="Passenger" subtitle="GP, Gosho"></CardBody>
                <hr className="k-separator" />
                <CardBody>
                    <Layout orientation="horizontal">
                        <div className="k-flex k-text-left">Departure</div>
                        <div className="k-flex k-text-right">Arrival</div>
                    </Layout>
                    <Layout orientation="horizontal">
                        <div className="k-flex k-text-left">
                            <TypographyH3>SOF</TypographyH3>
                            <div>
                                6 Dec 2017<br />
                                10:30
                            </div>
                        </div>
                        <TypographyH2 className="k-flex k-text-center">
                            ✈️
                        </TypographyH2>
                        <div className="k-flex k-text-right">
                            <TypographyH3>LON</TypographyH3>
                            <div>
                                6 Dec 2017<br />
                                12:30
                            </div>
                        </div>
                    </Layout>
                    <hr className="k-hr" />
                    <Layout orientation="horizontal">
                        <div className="k-flex k-text-left">
                            <TypographyH3>LON</TypographyH3>
                            <div>
                                12 Dec 2017<br />
                                18:30
                            </div>
                        </div>
                        <TypographyH2 className="k-flex k-text-center">
                            ✈️
                        </TypographyH2>
                        <div className="k-flex k-text-right">
                            <TypographyH3>SOF</TypographyH3>
                            <div>
                                12 Dec 2017<br />
                                22:30
                            </div>
                        </div>
                    </Layout>
                </CardBody>
                <hr className="k-separator" />
                <CardBody>
                    <Layout orientation="horizontal">
                        <div className="k-flex k-text-left">Total</div>
                        <div className="k-flex k-text-right">BGN 234</div>
                    </Layout>
                </CardBody>
            </CardNormal>

            <CardNormal>
                <CardHeader className="k-d-flex">
                    <Avatar type="image" themeColor="primary" rounded="medium" className="bg-img">
                        <img src="/packages/html/assets/avatar.jpg" />
                    </Avatar>
                    <div>
                        <CardTitle>Thumbnail and Footer</CardTitle>
                        <CardSubtitle>Capital of Italy</CardSubtitle>
                    </div>
                </CardHeader>
                <CardBody>
                    <p>Rome is a sprawling, cosmopolitan city with nearly 3,000 years of globally influential art, architecture and culture on display.</p>
                    <span className="k-separator k-separator-vertical"></span>
                    <p>Ancient ruins such as the Forum and the Colosseum evoke the power of the former Roman Empire. </p>
                </CardBody>
                <CardFooter>
                    Footer here
                </CardFooter>
            </CardNormal>

        </div>
    </>
);
