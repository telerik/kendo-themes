import { OneTimePassword, OneTimePasswordInput, OneTimePasswordSeparator } from '..';
import { Icon } from '../../icon';
import { InputGroup } from '../../input-group';

const styles = `
    #test-area {
        max-width: 880px;
        grid-template-columns: 120px repeat(2, 1fr);
    }
`;

export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">

            <span>OTP</span>
            <span>Space</span>
            <span>No Space</span>

            <span>Normal</span>

            <div>
                <OneTimePassword>
                    <OneTimePasswordInput value="1" />
                    <OneTimePasswordInput value="A" />
                    <OneTimePasswordInput value="3" />
                    <OneTimePasswordInput value="C" />
                    <OneTimePasswordInput value="K" />
                    <OneTimePasswordInput value="6" />
                </OneTimePassword>
            </div>
            <div>
                <OneTimePassword>
                    <InputGroup>
                        <OneTimePasswordInput value="1" />
                        <OneTimePasswordInput value="A" />
                        <OneTimePasswordInput value="3" />
                        <OneTimePasswordInput value="C" />
                        <OneTimePasswordInput value="K" />
                        <OneTimePasswordInput value="6" />
                    </InputGroup>
                </OneTimePassword>
            </div>

            <span>Password</span>

            <div>
                <OneTimePassword>
                    <OneTimePasswordInput value="1" type='password' />
                    <OneTimePasswordInput value="2" type='password' />
                    <OneTimePasswordInput value="3" type='password' />
                    <OneTimePasswordInput value="4" type='password' />
                    <OneTimePasswordInput value="5" type='password' />
                    <OneTimePasswordInput value="6" type='password' />
                </OneTimePassword>
            </div>
            <div>
                <OneTimePassword>
                    <InputGroup>
                        <OneTimePasswordInput value="1" type='password' />
                        <OneTimePasswordInput value="2" type='password' />
                        <OneTimePasswordInput value="3" type='password' />
                        <OneTimePasswordInput value="4" type='password' />
                        <OneTimePasswordInput value="5" type='password' />
                        <OneTimePasswordInput value="6" type='password' />
                    </InputGroup>
                </OneTimePassword>
            </div>

            <span>Groups</span>

            <div>
                <OneTimePassword>
                    <OneTimePasswordInput />
                    <OneTimePasswordInput />
                    <OneTimePasswordSeparator>-</OneTimePasswordSeparator>
                    <OneTimePasswordInput />
                    <OneTimePasswordInput />
                    <OneTimePasswordSeparator>-</OneTimePasswordSeparator>
                    <OneTimePasswordInput />
                    <OneTimePasswordInput />
                </OneTimePassword>
            </div>
            <div>
                <OneTimePassword>
                    <InputGroup>
                        <OneTimePasswordInput />
                        <OneTimePasswordInput />
                    </InputGroup>
                    <OneTimePasswordSeparator>-</OneTimePasswordSeparator>
                    <InputGroup>
                        <OneTimePasswordInput />
                        <OneTimePasswordInput />
                    </InputGroup>
                    <OneTimePasswordSeparator>-</OneTimePasswordSeparator>
                    <InputGroup>
                        <OneTimePasswordInput />
                        <OneTimePasswordInput />
                    </InputGroup>
                </OneTimePassword>
            </div>

            <span>Groups, No Separator</span>

            <div>
                <OneTimePassword>
                    <OneTimePasswordInput />
                    <OneTimePasswordInput />
                    <OneTimePasswordSeparator />
                    <OneTimePasswordInput />
                    <OneTimePasswordInput />
                    <OneTimePasswordSeparator />
                    <OneTimePasswordInput />
                    <OneTimePasswordInput />
                </OneTimePassword>
            </div>
            <div>
                <OneTimePassword>
                    <InputGroup>
                        <OneTimePasswordInput />
                        <OneTimePasswordInput />
                    </InputGroup>
                    <OneTimePasswordSeparator />
                    <InputGroup>
                        <OneTimePasswordInput />
                        <OneTimePasswordInput />
                    </InputGroup>
                    <OneTimePasswordSeparator />
                    <InputGroup>
                        <OneTimePasswordInput />
                        <OneTimePasswordInput />
                    </InputGroup>
                </OneTimePassword>
            </div>

            <span>Groups, Template Separator</span>

            <div>
                <OneTimePassword>
                    <OneTimePasswordInput />
                    <OneTimePasswordInput />
                    <OneTimePasswordSeparator><Icon icon="star" /></OneTimePasswordSeparator>
                    <OneTimePasswordInput />
                    <OneTimePasswordInput />
                    <OneTimePasswordSeparator><Icon icon="star" /></OneTimePasswordSeparator>
                    <OneTimePasswordInput />
                    <OneTimePasswordInput />
                </OneTimePassword>
            </div>
            <div>
                <OneTimePassword>
                    <InputGroup>
                        <OneTimePasswordInput />
                        <OneTimePasswordInput />
                    </InputGroup>
                    <OneTimePasswordSeparator><Icon icon="star" /></OneTimePasswordSeparator>
                    <InputGroup>
                        <OneTimePasswordInput />
                        <OneTimePasswordInput />
                    </InputGroup>
                    <OneTimePasswordSeparator><Icon icon="star" /></OneTimePasswordSeparator>
                    <InputGroup>
                        <OneTimePasswordInput />
                        <OneTimePasswordInput />
                    </InputGroup>
                </OneTimePassword>
            </div>
        </div>
    </>
);
