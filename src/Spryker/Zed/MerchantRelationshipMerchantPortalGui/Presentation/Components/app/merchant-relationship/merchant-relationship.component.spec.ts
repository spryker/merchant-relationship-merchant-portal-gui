import { Component, Input, NO_ERRORS_SCHEMA } from '@angular/core';
import { MerchantRelationshipComponent } from './merchant-relationship.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { TableConfig } from '@spryker/table';

@Component({
    template: `
        <mp-merchant-relationship [tableConfig]="tableConfig" [tableId]="tableId">
            <span title></span>
            <span button-action></span>
        </mp-merchant-relationship>
    `,
    standalone: false,
})
class TestHostComponent {
    @Input() tableConfig?: TableConfig;
    @Input() tableId?: string;
}

describe('MerchantRelationshipComponent', () => {
    let fixture: ComponentFixture<TestHostComponent>;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            declarations: [MerchantRelationshipComponent, TestHostComponent],
            schemas: [NO_ERRORS_SCHEMA],
        });

        fixture = TestBed.createComponent(TestHostComponent);
        await fixture.detectChanges();
    });

    it('should render <mp-merchant-relationship-table> component', () => {
        const productListTableComponent = fixture.debugElement.query(By.css('mp-merchant-relationship-table'));

        expect(productListTableComponent).toBeTruthy();
    });

    it('should render <spy-headline> component', () => {
        const headlineComponent = fixture.debugElement.query(By.css('spy-headline'));

        expect(headlineComponent).toBeTruthy();
    });

    it('should render `title` slot to the <spy-headline> component', () => {
        const titleSlot = fixture.debugElement.query(By.css('spy-headline [title]'));

        expect(titleSlot).toBeTruthy();
    });

    it('should render `button-action` slot to the <spy-headline> component', () => {
        const buttonActionSlot = fixture.debugElement.query(By.css('spy-headline [button-action]'));

        expect(buttonActionSlot).toBeTruthy();
    });

    it('should bound `@Input(tableConfig)` to the `config` input of <mp-merchant-relationship-table> component', async () => {
        const mockTableConfig = {
            config: 'config',
            data: 'data',
            columns: 'columns',
        };
        fixture.componentRef.setInput('tableConfig', mockTableConfig);
        await fixture.detectChanges();
        const productListTableComponent = fixture.debugElement.query(By.css('mp-merchant-relationship-table'));

        expect(productListTableComponent.properties.config).toEqual(mockTableConfig);
    });

    it('should bound `@Input(tableId)` to the `tableId` input of <mp-merchant-relationship-table> component', async () => {
        const mockTableId = 'mockTableId';
        fixture.componentRef.setInput('tableId', mockTableId);
        await fixture.detectChanges();
        const productListTableComponent = fixture.debugElement.query(By.css('mp-merchant-relationship-table'));

        expect(productListTableComponent.properties.tableId).toEqual(mockTableId);
    });
});
