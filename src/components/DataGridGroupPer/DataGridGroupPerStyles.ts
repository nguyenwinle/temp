import styled from 'styled-components/macro';

export const Wrapper = styled.div`
    font-size: 10px;

    /************* Table  ****************/
    .table-responsive {
        margin: .5rem 0;
    }
    table {
        width: 95%;
        margin: 0 auto;
        border-spacing: 0px;

    }
    thead {
        text-align: left;
    }

    th, td {
        padding: .3rem .3rem .3rem 2rem;
        border: solid 1px #d4d4d4;
    }
    .formatted__date {
        margin-top: 0;
        margin-bottom: 0;
    }

    .btn__createGroup {
        background: #2b78bd;
        border-color:  #2b78bd;
        border-radius: 3px;
        color: white;
        font-size: 10px;
        padding: 4px;
    }

   /************* Pagination ************/
   .card-footer.dx-g-bs4-paging-panel {
        width: 95%;
        display: flex;
        margin: 0 auto;
        justify-content: center;

        div.d-inline-block {
            width: 10%;

            select.form-control.d-sm-none {
                border: none;
            }
            nav {
                display: none;
            }
        }

        nav.float-right.d-none.d-sm-flex {
            width: 10%;

            ul.pagination.m-0 {
                margin: 0;
                padding: 0;
                list-style-type: none;

                li.page-item {
                    margin-right: 10px;
                        display: inline-flex;
                        width: 5%;
                    a.page-link {
                        text-decoration: none;
                        width: 100%;
                        text-align: center;
                    }
                }
                li.page-item.active {
                    text-decoration: none;
                    border: solid 1px #2b78bd;
                    color: white !important;
                    background: #2b78bd;
                    padding: 1px;
                    border-radius: 3px;

                    a.page-link {
                        color: white;
                    }
                }
                li.page-item:first-child,li.page-item:last-child {
                    display: none;
                }
            }
        }

        nav.float-right.d-sm-none {
            display: none;
        }
   }   
`;
