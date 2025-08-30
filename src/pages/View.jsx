import {
    ButtonGroup,
    For,
    IconButton,
    Pagination,
    Stack,
  } from "@chakra-ui/react"
  import { LuChevronLeft, LuChevronRight } from "react-icons/lu"

import '../styles/View.css';  
function View() {
    return (
        <div className="pageSize">
            <Pagination.Root count={20} pageSize={1} defaultPage={1}>
              <ButtonGroup variant="ghost" size={"xs"}>
                <Pagination.PrevTrigger asChild>
                  <IconButton>
                    <LuChevronLeft />
                  </IconButton>
                </Pagination.PrevTrigger>
  
                <Pagination.Items
                  render={(page) => (
                    <IconButton variant={{ base: "ghost", _selected: "outline" }}>
                      {page.value}
                    </IconButton>
                  )}
                />
  
                <Pagination.NextTrigger asChild>
                  <IconButton>
                    <LuChevronRight />
                  </IconButton>
                </Pagination.NextTrigger>
              </ButtonGroup>
            </Pagination.Root>
        </div>
    )
}
export default View;